import path from 'path';
import express, { Request, Response } from 'express';
import session from 'express-session';
import { createPortalProxy } from '@integromat/make-portal-sdk'

const PROXY_PATH = '/proxy';
const PORTAL_BASE_URL = 'https://eu1.make.com';
const SECRET_KEY = 'your_secret_key';
const KEY_ID = 'your_key_id';

// Create the proxy middleware once.
const portalProxy = createPortalProxy({
  portalBaseUrl: PORTAL_BASE_URL,
  proxyPath: PROXY_PATH,
  jwtSecret: SECRET_KEY,
  jwtKeyId: KEY_ID,
  // Provide a function to extract the dynamic user ID from the request.
  userId: (req) => (req as any).session.userId,
});


const app = express();

app.use(
  session({
    secret: 'some_secret_value',
    resave: false,
    saveUninitialized: false,
  })
);

app.use(express.static(path.join(__dirname, '../public')));

app.get('/login', (req: Request, res: Response) => {
  // For demonstration, set a userId in session
  (req.session as any).userId = 'fakeUserId';
  res.send('Logged in - userId set in session');
});

app.get('/logout', (req: Request, res: Response) => {
  req.session?.destroy(() => {
    res.send('Logged out - session destroyed');
  });
});

app.use(
  PROXY_PATH,
  (req, res, next) => {
    // Your authentication or other middleware can run first.
    if (!(req.session as any)?.userId) {
      res.status(401).json({ error: 'Unauthorized' });
      return;
    }
    next();
  },
  portalProxy,
);

app.listen(3000, () => {
  console.log('Server is listening on port 3000.');
});

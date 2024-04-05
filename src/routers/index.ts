import express, { Router, Request, Response } from 'express';
import controller from './controller';

const router: Router = express.Router();

router.patch('/createQrCode', controller.createQrCode);

router.post('/validateQrCode/{idQrCode}', controller.validateQrCode);

router.delete('/deleteQrCode/{idQrCode}', controller.deleteQrCode);

export default router;

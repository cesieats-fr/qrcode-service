import { Request, Response } from 'express';

const createQrCode = (req: Request, res: Response) => {
  res.status(200).json({ message: 'Hello, world!' });
};

const validateQrCode = (req: Request, res: Response) => {
  res.status(200).json({ message: 'Hello, world!' });
};

const deleteQrCode = (req: Request, res: Response) => {
  res.status(200).json({ message: 'Hello, world!' });
};

const controller = {
  createQrCode,
  validateQrCode,
  deleteQrCode,
};

export default controller;

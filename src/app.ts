import express, { Express, NextFunction, Request, Response, Router, ErrorRequestHandler } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';

import userRoutes from './routes/UserRoutes';
import Logger from './config/LoggerMiddleware';

const port: Number = 8000;
const app: Express = express();

app.use(morgan('dev'));

/** Parse the request */
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use('/users', userRoutes);

// Global error handling middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    Logger.error(err.message);
    res.status(500).json({
        type: 'error',
        message: 'Internal server error'
    });
});

// Catch-all middleware for handling undefined routes
app.use((req: Request, res: Response, next: NextFunction) => {
    Logger.error('Route not found');
    res.status(404).json({
        type: 'error',
        message: 'Route not found'
    });
});

app.listen(port, () => {
    Logger.info(`Server listening on http://localhost:${port}`);
});

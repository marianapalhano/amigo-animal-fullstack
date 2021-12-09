import { Router, Request, Response } from 'express';
import { NgosService } from '../services/ngos.service';

const router = Router();

const ngosService = new NgosService();

// GET -------------------------------------------------------------------------------------
router.get('/', async (req: Request, res: Response) => {
    const ngos = await ngosService.getAll();
    res.status(200).send(ngos);
});

router.get('/id/:id', async (req: Request, res: Response) => {
    const ngo = await ngosService.getById(parseInt(req.params.id));
    if (ngo) {
        res.status(200).send(ngo);
    } else {
        res.status(404).send({ message: 'ONG não encontrada'});
    }
});

// POST  ------------------------------------------------------------------------------------
router.post('/create', async (req: Request, res: Response) => {    
    const ngo = req.body;
    const createdNgo = await ngosService.create(ngo);
    res.status(201).send(createdNgo);
});

export default router;
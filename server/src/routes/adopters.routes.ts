import { Router, Request, Response } from 'express';
import { AdoptersService } from '../services/adopters.service';

const router = Router();

const adoptersService = new AdoptersService();

// GET -------------------------------------------------------------------------------------
router.get('/', async (req: Request, res: Response) => {
    const adopters = await adoptersService.getAll();
    res.status(200).send(adopters);
});

router.get('/id/:id', async (req: Request, res: Response) => {
    const adopter = await adoptersService.getById(parseInt(req.params.id));
    if(adopter) {
        res.status(200).send(adopter);
    } else {
        res.status(404).send({ message: 'Adotante não encontrado' });
    }
});

// POST  ------------------------------------------------------------------------------------
router.post('/authenticate', async (req: Request, res: Response) => {
    const adopter = await adoptersService.getByEmailAndPassword(req.body.email, req.body.password);
    if (adopter) {
        res.status(200).send(adopter);
    } else {
        res.status(404).send({ message: 'Usuário/senha inválidos!' });
    }
});

router.post('/create', async (req: Request, res: Response) => {
    const adopter = req.body;
    const createdAdopter = await adoptersService.create(adopter);
    res.status(201).send(createdAdopter);
});

// PUT -------------------------------------------------------------------------------------
router.put('/update/:id', async (req: Request, res: Response) => {
    const partialAdopter = req.body;
    const updateResult = await adoptersService.update(partialAdopter.name, partialAdopter.email, req.params.id);
    if(updateResult) {
        res.status(200).send(updateResult);
    } else {
        res.status(404).send({ message: 'Adotante não encontrado' });
    }
});

router.put('/adoption/:id', async (req: Request, res: Response) => {
    const partialAdopter = req.body;
    const updateResult = await adoptersService.makeAdoption(partialAdopter.pets, req.params.id);
    if(updateResult) {
        res.status(200).send(updateResult);
    } else {
        res.status(404).send({ message: 'Adotante não encontrado' });
    }
});

// DELETE -----------------------------------------------------------------------------------
router.delete('/remove/:id', async (req: Request, res: Response) => {
    const id = req.params.id;
    const deleteResult = await adoptersService.remove(id);
    if (deleteResult) res.status(200).send({ message: 'Adotante excluído com sucesso' });
    else res.status(404).send({ message: 'Adotante não encontrado, não foi possível fazer a exclusão' });
});

export default router;
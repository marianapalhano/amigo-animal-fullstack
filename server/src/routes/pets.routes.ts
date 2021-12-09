import { Router, Request, Response } from 'express';
import { PetsService } from '../services/pets.service';

const router = Router();

const petsService = new PetsService();

// GET -------------------------------------------------------------------------------------
router.get('/', async (req: Request, res: Response) => {
    const pets = await petsService.getAll();
    res.status(200).send(pets);
});

router.get('/id/:id', async (req: Request, res: Response) => {
    const pet = await petsService.getById(parseInt(req.params.id));
    if (pet) {
        res.status(200).send(pet);
    } else {
        res.status(404).send({ message: 'Pet não encontrado'});
    }
});

router.get('/foradoption', async (req: Request, res: Response) => {
    const pets = await petsService.getByAdoption();
    res.status(200).send(pets);
});

// POST  ------------------------------------------------------------------------------------
router.post('/create', async (req: Request, res: Response) => {    
    const pet = req.body;
    const createdPet = await petsService.create(pet);
    res.status(201).send(createdPet);
});

// PUT -------------------------------------------------------------------------------------
router.put('/update/:id', async (req: Request, res: Response) => {
    const partialPet = req.body;
    const updateResult = await petsService.update(partialPet.isAdopted, req.params.id);
    if(updateResult) {
        res.status(200).send(updateResult);
    } else {
        res.status(404).send({ message: 'Pet não encontrado' });
    }
});
export default router;
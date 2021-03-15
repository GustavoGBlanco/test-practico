import { Request, Response } from 'express';
import { ItemServices } from '../services/items.services';

export const ItemsController = {
  search: async (req: Request, res: Response): Promise<any> => {
    try {
      const query = req.query.search;
      const data = await ItemServices.search(query as string);
      return res.status(200).send(data);
    } catch (e) {
      res.send(console.log("Error: " + e));
    }
  },
  item: async (req: Request, res: Response): Promise<any> => {
    try {
      const id = req.params.id;
      const data = await ItemServices.item(id as string);
      return res.status(200).send(data);
    } catch (e) {
      res.status(404).send(console.error("No hay resultados en la búsqueda"));
    }
  }
}
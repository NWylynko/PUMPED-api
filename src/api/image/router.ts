import express from 'express';
import multer from 'multer';
import path from 'path';

import addImage from './addImage';
import getImage from './getImage';
import removeImage from './removeImage';

const router = express.Router();

router.get('/:ImageID/:size', async (req, res, next) => {
  // get single image
  try {
    const { ImageID, size } = req.params;

    // get image name
    const name = await getImage(ImageID);

    // set it as a header
    res.setHeader('image-name', name);

    // send image
    res.sendFile(path.resolve(`./public/${ImageID}/${size}.webp`));
  } catch (error) {
    next(error);
  }
});

const ramUploadSpace = multer({ storage: multer.memoryStorage() });

router.post('/', ramUploadSpace.single('image'), async (req, res, next) => {
  // add a new image
  try {
    const { name } = req.body;

    res.json({
      success: true,
      data: await addImage(req.file, name),
    });
  } catch (error) {
    next(error);
  }
});

router.delete('/:ImageID', async (req, res, next) => {
  // remove a image
  try {
    const { ImageID } = req.params;

    res.json({
      success: true,
      data: await removeImage(ImageID),
    });
  } catch (error) {
    next(error);
  }
});

export default router;

import multer from 'multer';
import path from 'path';

const tmpFolder = path.resolve('temp');

export default {
  directory: tmpFolder,

  storage: multer.diskStorage({
    destination: tmpFolder,
    filename(request, file, callback) {
      return callback(null, file.originalname);
    },
  }),
};

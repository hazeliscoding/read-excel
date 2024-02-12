import * as fs from 'fs';
import * as path from 'path';
import { readFromFile, tempFolderPath, writeToTempFile } from './file-utils';

const run = async () => {
  return new Promise(async (resolve) => {
    const originalExcelFile = path.join(__dirname, '../', 'data', 'books.xlsx');
    const tempCsvFilePath = path.join(tempFolderPath, 'temp_books.csv');
    const jsonWriteFile = path.join(tempFolderPath, 'books.json');

    console.log(`Reading file from: ${originalExcelFile}`);
    await writeToTempFile(originalExcelFile, tempCsvFilePath);
    const jsonObj = (await readFromFile(tempCsvFilePath)) as any[];

    console.log(`Writing file ${jsonWriteFile}`);
    const jsonWrite = fs.createWriteStream(jsonWriteFile);
    jsonWrite.write(JSON.stringify(jsonObj, null, 2));

    return resolve({
      success: true,
      message: `File wrote complete: Items Stored: ${jsonObj.length}`,
    });
  });
};

run()
  .catch((e) => console.error(e))
  .then((c) => console.log('Complete', c));
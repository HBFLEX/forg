// Author: HBFL3X
// EMAIL: hbfl3x@gmail.com


import { handleDir } from "./directory_handler.ts";
import file_organizer from './file_organizer.ts'
import file_handler from './file_handler.ts'

// // get the command line arguments -> directory name
const { args: [directory] } = Deno;

interface FileStructure{
  file: { file: Deno.DirEntry, ext: string };
}

// deno-lint-ignore prefer-const
let dirFileExt: FileStructure[] = [];


const organizeDir = async () => {

  if(directory === '' || directory === undefined) console.error('Error: Specify the directory to organize');

  try{
    const files = await file_handler(directory, dirFileExt);

    const exts: string[] = [];

    dirFileExt.map((f) => { exts.push(f.file.ext);});

    handleDir(exts);
    file_organizer(directory, files); 

  }catch(e){
    throw new Error(e);
  }
}
organizeDir();

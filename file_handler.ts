// Author: HBFL3X
// EMAIL: hbfl3x@gmail.com


interface FileStructure{
    file: { file: Deno.DirEntry, ext: string };
}

const getDirFileObj = async (dir: string, dirFileExt: FileStructure[]): Promise<FileStructure[]> => {
    // deno-lint-ignore no-inferrable-types
    let fileExt: string = '';
    let fileSegments: string[] = [];
  
    try{
  
      const cwd = dir === '.' ? Deno.cwd() : dir;
  
      for await(const file of await Deno.readDir(cwd)){
        if(file.isFile){
          fileSegments = file.name.split('.');
          fileExt = fileSegments[fileSegments.length - 1];
          dirFileExt.push({ file: { file: file, ext: fileExt } });
        }
      }

      if(dirFileExt.length === 0) throw new Error('No files found to organize in this directory');
  
      return dirFileExt;
    }catch(e){
      throw new Error(e);
    }
}

export default getDirFileObj
// Author: HBFL3X
// EMAIL: hbfl3x@gmail.com


interface FileStructure{
    file: { file: Deno.DirEntry, ext: string };
}

const mvFileToDir = (file: string, dir: string): void => {
    Deno.rename(file, dir).catch((_) => console.error(`failed to move ${file} -> ${dir}`))
}

const organizer = (directory: string, files: FileStructure[]):void => {
    try{
      files.map((f) => {
        if(f.file.ext === 'mp4' || f.file.ext === 'mkv' || f.file.ext === 'webm' || f.file.ext === 'avi'){
          mvFileToDir(`${directory}/${f.file.file.name}`, `${directory}/videos/${f.file.file.name}`);
        }
    
        if(f.file.ext === 'mp3' || f.file.ext === 'wav' || f.file.ext === 'ogg'){
          mvFileToDir(`${directory}/${f.file.file.name}`, `${directory}/music/${f.file.file.name}`);
        }
  
        if(f.file.ext === 'png' || f.file.ext === 'jpg' || f.file.ext === 'jpeg' || f.file.ext === 'gif'){
          mvFileToDir(`${directory}/${f.file.file.name}`, `${directory}/pictures/${f.file.file.name}`);
        }
    
        if(f.file.ext === 'txt'){
          mvFileToDir(`${directory}/${f.file.file.name}`, `${directory}/text_files/${f.file.file.name}`);
        }
  
        if(f.file.ext === 'pdf' || f.file.ext === 'epub'){
          mvFileToDir(`${directory}/${f.file.file.name}`, `${directory}/pdf_files/${f.file.file.name}`);
        }
  
        if(f.file.ext === 'xlsx'){
          mvFileToDir(`${directory}/${f.file.file.name}`, `${directory}/spreadsheet_files/${f.file.file.name}`);
        }
  
        if(f.file.ext === 'docx'){
          mvFileToDir(`${directory}/${f.file.file.name}`, `${directory}/word_documents/${f.file.file.name}`);
        }
  
        if(f.file.ext === 'zip' || f.file.ext === 'gz' || f.file.ext === 'tgz'){
          mvFileToDir(`${directory}/${f.file.file.name}`, `${directory}/zip_files/${f.file.file.name}`);
        }
  
        if(f.file.ext === 'crdownload'){
          mvFileToDir(`${directory}/${f.file.file.name}`, `${directory}/unfinished_downloaded_files/${f.file.file.name}`);
        }
  
        if(f.file.ext === 'pptx'){
          mvFileToDir(`${directory}/${f.file.file.name}`, `${directory}/powerpoint_files/${f.file.file.name}`);
        }
  
        if(f.file.ext === 'csv'){
          mvFileToDir(`${directory}/${f.file.file.name}`, `${directory}/csv_files/${f.file.file.name}`);
        }
  
        if(f.file.ext === 'deb' || f.file.ext === 'exe' || f.file.ext === 'run'){
          mvFileToDir(`${directory}/${f.file.file.name}`, `${directory}/apps/${f.file.file.name}`);
        }
      });
      console.info('Files were successfully organized by forg ✅');

    }catch(e){
      throw new Error(e);
    }
}

export default organizer
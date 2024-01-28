// Author: HBFL3X
// EMAIL: hbfl3x@gmail.com


const createNewDir = (dirName: string): void => {
  Deno.mkdir(dirName)
    .catch((_) => console.error(`failed to create dir ${dirName} - if directory already created ignore this error.`))
}

const handleDir = (exts: string []): void => {
  if(exts.includes('mp3') || exts.includes('wav') || exts.includes('ogg')){
    createNewDir('music');
  }


  if(exts.includes('mp4') || exts.includes('avi') || exts.includes('mkv') || exts.includes('webm')){
    createNewDir('videos');
  }

  if(exts.includes('png') || exts.includes('jpg') || exts.includes('jpeg') || exts.includes('webp') || exts.includes('gif')){
    createNewDir('pictures');
  }

  if(exts.includes('txt')){
    createNewDir('text_files');
  }

  if(exts.includes('pdf') || exts.includes('epub')){
    createNewDir('pdf_files');
  }

  if(exts.includes('xlsx')){
    createNewDir('spreadsheet_files');
  }

  if(exts.includes('docx')){
    createNewDir('word_documents');
  }

  if(exts.includes('zip') || exts.includes('gz') || exts.includes('tgz') || exts.includes('xz')){
    createNewDir('zip_files');
  }

  if(exts.includes('crdownload')){
    createNewDir('unfinished_downloaded_files');
  }

  if(exts.includes('pptx')){
    createNewDir('powerpoint_files');
  }

  if(exts.includes('csv')){
    createNewDir('csv_files');
  }

  if(exts.includes('deb') || exts.includes('exe') || exts.includes('run') || exts.includes('bin')){
    createNewDir('apps');
  }
}

export { createNewDir, handleDir, }
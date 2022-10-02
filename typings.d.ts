export interface File {
  filename: string;
  content: string;
}

export interface Folder {
  name: string;
  files: Array<File|Folder>;
}

export interface MyFiles {
  files: File[];
}

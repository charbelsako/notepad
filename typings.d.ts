interface SanityBody {
  _createdAt: string;
  _id: string;
  _rev: string;
  _updatedAt: string;
}

export interface File extends SanityBody {
  filename: string;
  content: string;
}

export interface Folder extends SanityBody {
  name: string;
  files: Array<File | Folder>;
}

export interface MyFiles {
  files: File[];
}

export interface MyFolders {
  folders: Folder[];
}

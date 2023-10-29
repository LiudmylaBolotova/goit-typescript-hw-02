export enum UserRole {
  admin = 'admin',
  editor = 'editor',
  guest = 'guest',
}

type СompareRoles = Record<UserRole, string>;

const RoleDescription: СompareRoles = {
  admin: 'Admin User',
  editor: 'Editor User',
  guest: 'Guest User',
};

export {};
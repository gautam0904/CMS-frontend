import { Injectable } from '@angular/core';

export interface NavigationItem {
  id: string;
  title: string;
  type: 'item' | 'collapse' | 'group';
  icon?: string;
  url?: string;
  classes?: string;
  external?: boolean;
  role: string[];
  target?: boolean;
  breadcrumbs?: boolean;
  children?: Navigation[];
}

export interface Navigation extends NavigationItem {
  children?: NavigationItem[];
}
const NavigationItems = [
  {
    id: 'dashboard',
    title: 'Dashboard',
    type: 'group',
    icon: 'icon-navigation',
    children: [
      {
        id: 'default',
        title: 'Dashboard',
        type: 'item',
        classes: 'nav-item   menu',
        url: '/',
        role: ['user', 'admin','creater'],
        icon: 'pi pi-home',
        breadcrumbs: false
      },
      {
        id: 'my-content',
        title: 'My content',
        type: 'item',
        classes: 'nav-item   menu',
        url: '/page/myContent',
        role: ['creater'],
        icon: 'pi pi-briefcase menu',
        breadcrumbs: true
      }
    ]
  },
  {
    id: 'authentication',
    title: 'Authentication',
    type: 'group',
    icon: 'icon-navigation',
    children: [
      {
        id: 'login',
        title: 'Login',
        type: 'item',
        url: '/auth',
        role: ['admin', 'creater', 'user'],
        classes: 'nav-item   menu',
        icon: 'pi pi-sign-in',
        breadcrumbs: false
      },
      {
        id: 'register',
        title: 'Signup',
        type: 'item',
        url: '/auth/signup',
        role: ['admin', 'creater', 'user'],
        classes: 'nav-item   menu',
        icon: 'pi pi-user-plus',
        breadcrumbs: false
      }
    ]
  },
  {
    id: 'pages',
    title: 'Pages',
    type: 'group',
    icon: 'icon-navigation',
    children: [
      {
        id: 'videos',
        title: 'Videos',
        type: 'item',
        classes: 'nav-item   menu',
        role: ['admin', 'creater', 'user'],
        url: '/page/videos',
        icon: 'pi pi-fw pi-video'
      },
      {
        id: 'image',
        title: 'Images',
        type: 'item',
        classes: 'nav-item   menu',
        role: ['admin', 'creater', 'user'],
        url: '/page/images',
        icon: 'pi pi-fw pi-image'
      },
      {
        id: 'article',
        title: 'Article',
        type: 'item',
        classes: 'nav-item   menu',
        role: ['admin', 'creater', 'user'],
        url: '/page/articles',
        icon: 'pi pi-fw pi-align-justify',
      }
    ]
  },
  {
    id: 'other',
    title: 'Other',
    type: 'group',
    icon: 'icon-navigation',
    children: [
      {
        id: 'Users',
        title: 'Users',
        type: 'item',
        url: '/page/users',
        role: ['admin', 'creater', 'user'],
        classes: 'nav-item   menu',
        icon: 'pi pi-fw pi-users'
      },
      {
        id: 'add-content',
        title: 'Add content',
        type: 'item',
        classes: 'nav-item   menu',
        role: ['admin', 'creater', 'user'],
        url: '/page/addPost',
        icon: 'pi pi-file-plus menu',
      },
      {
        id: 'creater-channel',
        title: 'Make your channel',
        type: 'item',
        classes: 'nav-item   menu',
        role: ['admin', 'creater', 'user'],
        url: '/page/addPost',
        icon: 'pi pi-file-plus menu',
      }
    ]
  }
];

@Injectable()
export class NavigationItem {
  get() {
    return NavigationItems;
  }
}

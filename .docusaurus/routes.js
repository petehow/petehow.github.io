
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/blog',
    component: ComponentCreator('/blog','d91'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive','7ca'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post','2fa'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post','26f'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post','5b1'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags','268'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus','ca3'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook','2a2'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello','8a4'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola','cef'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome','795'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page','2cf'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs','514'),
    routes: [
      {
        path: '/docs/intro',
        component: ComponentCreator('/docs/intro','aed'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-basics/congratulations',
        component: ComponentCreator('/docs/tutorial-basics/congratulations','793'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-basics/create-a-blog-post',
        component: ComponentCreator('/docs/tutorial-basics/create-a-blog-post','68e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-basics/create-a-document',
        component: ComponentCreator('/docs/tutorial-basics/create-a-document','c2d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-basics/create-a-page',
        component: ComponentCreator('/docs/tutorial-basics/create-a-page','f44'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-basics/deploy-your-site',
        component: ComponentCreator('/docs/tutorial-basics/deploy-your-site','e46'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-basics/markdown-features',
        component: ComponentCreator('/docs/tutorial-basics/markdown-features','4b7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-extras/manage-docs-versions',
        component: ComponentCreator('/docs/tutorial-extras/manage-docs-versions','fdd'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-extras/translate-your-site',
        component: ComponentCreator('/docs/tutorial-extras/translate-your-site','2d7'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/','a0a'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*')
  }
];

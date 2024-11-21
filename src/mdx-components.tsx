import type { MDXComponents } from 'mdx/types'
import Image, { ImageProps } from 'next/image'
import React from 'react'

// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including inline styles,
// components from other libraries, and more.

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Allows customizing built-in components, e.g. to add styling.
    h1: ({ children }) => (
      <h1 className='text-2xl'># {children}</h1>
    ),
    h2: ({ children }) => (
      <h1 className='text-xl'>## {children}</h1>
    ),
    h3: ({ children }) => (
      <h1 className='text-lg'>### {children}</h1>
    ),
    a: ({ href, children }) => (
      <a className='link' href={href}>{children}</a>
    ),
    ol: ({ children }) => (
      <ol
        style={{
          listStyle: "decimal",
          listStylePosition: "inside",
          marginLeft: "10px",
        }}
      >{children}</ol>
    ),
    ul: ({ children }) => (
      <ul
        style={{
          listStyle: "disc",
          listStylePosition: "inside",
          marginLeft: "10px",
        }}
      >{children}</ul>
    ),
    p: ({ children }) => (
      <><p className='inline'>{children}</p><br /></>
    ),
    ...components,
  }
}
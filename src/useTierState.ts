import { useState } from 'react';

export function useTierState() {
  return useState([
    { name: 'S', data: [], className: 'bg-rose-500' },
    { name: 'A', data: [], className: 'bg-orange-300' },
    { name: 'B', data: [], className: 'bg-amber-200' },
    { name: 'C', data: [], className: 'bg-green-400' },
    { name: 'D', data: [], className: 'bg-teal-400' },
    { name: 'F', data: [], className: 'bg-fuchsia-400' },
    {
      name: 'Unranked',
      className: 'bg-slate-100',
      data: [
        {
          id: '1',
          imageUrl: 'https://i.imgur.com/s48zEse.png',
        },
        {
          id: '2',
          imageUrl: 'https://i.imgur.com/2rdm94r.png',
        },
        {
          id: '3',
          imageUrl: 'https://i.imgur.com/X3BRKng.png',
        },
        {
          id: '4',
          imageUrl: 'https://i.imgur.com/2aWUWHe.png',
        },
        {
          id: '5',
          imageUrl: 'https://i.imgur.com/yVz3VYa.png',
        },
        {
          id: '6',
          imageUrl: 'https://i.imgur.com/Z2XSNbM.png',
        },
        {
          id: '7',
          imageUrl:
            'https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Fwiki.pine64.org%2Fimages%2Fthumb%2F3%2F3e%2FManjaro-logo.svg%2F400px-Manjaro-logo.svg.png&sp=1714502964Tcfec1047c73ccdfbe45524316448b68371dd9b319afa24fc869da6c22574468e',
        },
        {
          id: '8',
          imageUrl:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/OpenSUSE_Logo.svg/1920px-OpenSUSE_Logo.svg.png',
        },
        {
          id: '9',
          imageUrl:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Deepin_logo.svg/241px-Deepin_logo.svg.png',
        },
        {
          id: '10',
          imageUrl:
            'https://seeklogo.com/images/Z/zorin-os-logo-B427B2B617-seeklogo.com.png',
        },
        {
          id: '11',
          imageUrl:
            'https://upload.wikimedia.org/wikipedia/commons/0/02/Pop_OS-Logo-nobg.png',
        },
        {
          id: '12',
          imageUrl:
            'https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.5Ab2pz9NHySh2rKSaPeexAAAAA%26pid%3DApi&sp=1714503240Ta2cb53f4a8948c5fce32e00a8949e6bd7982aaae342e2d462146c08f6e67ffc6',
        },
        {
          id: '13',
          imageUrl:
            'https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.uZ-E0LIzPRZkIehT3csd3gHaHa%26pid%3DApi&sp=1714503275Tdbe733f738d3019a52eb49ab55ff3f0a626afb50a96003adff7c783ecade9f86',
        },
      ],
    },
  ]);
}

import type { DeliveryOption } from '../types';
// ÚNICO local para editar links e dados comerciais.
// Valores null/'' = ainda não fornecido: o botão aparece desativado ("em breve").
const delivery: DeliveryOption[] = [
  { id: 'bela-vista', label: 'Bela Vista', area: 'São Paulo - SP',
    url: 'https://www.ifood.com.br/delivery/sao-paulo-sp/doce-elfa-bela-vista/5f7cde58-006f-42a4-b29f-ea456d4ee13a?UTM_Medium=share' },
  { id: 'lapa', label: 'Lapa', area: 'São Paulo - SP', url: null }, // TODO: link iFood da Lapa
];
export const site = {
  name: 'Doce Elfa',
  tagline: 'Feito por Elfos!', // frase oficial do Linktree
  whatsappNumber: '5511994775225',
  whatsappMessage: 'Olá, Doce Elfa! Gostaria de fazer uma encomenda.',
  instagramUrl: 'https://www.instagram.com/doceelfa/',
  instagramHandle: '@doceelfa',
  menuUrl: 'https://doce-elfa.goomer.app/menu',
  fineSweetsPdfUrl: '', // TODO: colocar o PDF oficial em /public e informar o caminho
  delivery,
  address: null as string | null, // TODO: só preencher se confirmado
  hours: null as string | null,
};
export const whatsappUrl = (msg: string = site.whatsappMessage) =>
  `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(msg)}`;

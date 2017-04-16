/**
 * Item container class
 * to store all data of the item.
 */
export class Item {
  title: string;
  logo: string;
  link: string;
  city: string;
  province: string;
  description: string;
  guid: string;
  pubDate: string;

  constructor(
    title: string,
    logo: string,
    link: string,
    city: string,
    province: string,
    description: string,
    guid: string,
    pubDate: string) {
    this.title = title !== '' ? title : '-';
    this.logo = logo !== '' ? logo : '-';
    this.link = link !== '' ? link : '-';
    this.province = province !== '' ? province : '-';
    this.description = description !== '' ? description : '-';
    this.guid = guid !== '' ? guid : '-';
    this.pubDate = pubDate;
  }
}

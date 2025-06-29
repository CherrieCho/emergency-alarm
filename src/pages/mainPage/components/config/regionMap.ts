import seoul from '../../../../assets/logo/region/서울특별시.svg';
import gwangju from '../../../../assets/logo/region/광주광역시.svg';
import daegu from '../../../../assets/logo/region/대구광역시.svg';
import busan from '../../../../assets/logo/region/부산광역시.svg';
import incheon from '../../../../assets/logo/region/인천광역시.svg';
import gangwon from '../../../../assets/logo/region/강원도.svg';
import gyeonggi from '../../../../assets/logo/region/경기도.svg';
import gyeongsangnam from '../../../../assets/logo/region/경상남도.svg';
import gyeongsangbuk from '../../../../assets/logo/region/경상북도.svg';
import sejong from '../../../../assets/logo/region/세종특별자치시.svg';
import ulsan from '../../../../assets/logo/region/울산광역시.svg';
import jeollanam from '../../../../assets/logo/region/전라남도.svg';
import jeonbukSpecial from '../../../../assets/logo/region/전북특별자치도.svg';
import jeju from '../../../../assets/logo/region/제주특별자치도.svg';
import chungcheongnam from '../../../../assets/logo/region/충청남도.svg';
import chungcheongbuk from '../../../../assets/logo/region/충청북도.svg';

type TypeRegionMap = {
  id: number;
  name: string;
  shortName: string;
  src: string;
  isFavorite: boolean;
}[];

export const regionMap: TypeRegionMap = [
  {
    id: 0,
    name: '서울특별시',
    shortName: '서울',
    src: seoul,
    isFavorite: false,
  },
  {
    id: 1,
    name: '광주광역시',
    shortName: '광주',
    src: gwangju,
    isFavorite: false,
  },
  {
    id: 2,
    name: '대구광역시',
    shortName: '대구',
    src: daegu,
    isFavorite: false,
  },
  {
    id: 3,
    name: '부산광역시',
    shortName: '부산',
    src: busan,
    isFavorite: false,
  },
  {
    id: 4,
    name: '인천광역시',
    shortName: '인천',
    src: incheon,
    isFavorite: false,
  },
  { id: 5, name: '강원도', shortName: '강원', src: gangwon, isFavorite: false },
  {
    id: 6,
    name: '경기도',
    shortName: '경기',
    src: gyeonggi,
    isFavorite: false,
  },
  {
    id: 7,
    name: '경상북도',
    shortName: '경북',
    src: gyeongsangbuk,
    isFavorite: false,
  },
  {
    id: 8,
    name: '경상남도',
    shortName: '경남',
    src: gyeongsangnam,
    isFavorite: false,
  },
  {
    id: 9,
    name: '세종특별자치시',
    shortName: '세종',
    src: sejong,
    isFavorite: false,
  },
  {
    id: 10,
    name: '울산광역시',
    shortName: '울산',
    src: ulsan,
    isFavorite: false,
  },
  {
    id: 11,
    name: '전라남도',
    shortName: '전남',
    src: jeollanam,
    isFavorite: false,
  },
  {
    id: 12,
    name: '전북특별자치도',
    shortName: '전북',
    src: jeonbukSpecial,
    isFavorite: false,
  },
  { id: 13, name: '제주도', shortName: '제주', src: jeju, isFavorite: false },
  {
    id: 14,
    name: '충청남도',
    shortName: '충남',
    src: chungcheongnam,
    isFavorite: false,
  },
  {
    id: 15,
    name: '충청북도',
    shortName: '충북',
    src: chungcheongbuk,
    isFavorite: false,
  },
];

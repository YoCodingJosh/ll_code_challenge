import HomeIcon from '@/assets/NavIcons/Home.svg';
import RecordIcon from '@/assets/NavIcons/Record.svg';
import MusicIcon from '@/assets/NavIcons/Music Note.svg';
import ArtistIcon from '@/assets/NavIcons/People.svg';
import ConcertIcon from '@/assets/NavIcons/Calendar.svg';

// this is so we can webpack the svg files and not have any surprises when we try to use them in a production build

export class NavbarItemIcon {
  static readonly Home = HomeIcon;
  static readonly Record = RecordIcon;
  static readonly Music = MusicIcon;
  static readonly Artist = ArtistIcon;
  static readonly Concert = ConcertIcon;
}

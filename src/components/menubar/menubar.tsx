import { Menubar as PrimeReactMenubar, MenubarProps } from 'primereact/menubar';
import { FC } from 'react';

type Props = { ['cy-data']?: string } & MenubarProps;

const Menubar: FC<Props> = ({ ...rest }) => {
  return <PrimeReactMenubar {...rest} />;
};

export default Menubar;

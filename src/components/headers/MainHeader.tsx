import { IconMoonStars } from '@tabler/icons-react';
import { ReactComponent as Logo } from '@assets/logo.svg';
import AvatarSmall from '@components/avatars/AvatarSmall';

const MainHeader = () => {
    return (
        <header className="container flex items-center justify-between">
            <Logo className="size-[80px]" />
            <section className="flex items-center gap-4">
                <IconMoonStars />
                <AvatarSmall />
            </section>
        </header>
    );
};

export default MainHeader;

import {
    IconBuilding,
    IconClick,
    IconFilePencil,
    IconSmartHome,
    IconUserPlus,
    IconUsersGroup,
    IconZoomPan,
} from '@tabler/icons-react';
import { Button } from '../buttons';

const MainMenu = () => {
    return (
        <section className="w-full border-t border-gray-light-extra-outline-border py-2 flex flex-col items-center justify-start shadow-secondary-main">
            <nav className="container flex items-center gap-2">
                <Button
                    icon={<IconSmartHome className="size-[20px]" />}
                    text="Dashboard"
                    hasSubmenu
                />
                <Button
                    icon={<IconBuilding className="size-[20px]" />}
                    text="Properties"
                />
                <Button
                    icon={<IconUserPlus className="size-[20px]" />}
                    text="New Applicant"
                    hasSubmenu
                />
                <Button
                    icon={<IconUsersGroup className="size-[20px]" />}
                    text="Tenants"
                />
                <Button
                    icon={<IconClick className="size-[20px]" />}
                    text="Actions"
                    hasSubmenu
                />
                <Button
                    icon={<IconZoomPan className="size-[20px]" />}
                    text="Inspections"
                    hasSubmenu
                />
                <Button
                    icon={<IconFilePencil className="size-[20px]" />}
                    text="Compliance"
                    hasSubmenu
                />
            </nav>
        </section>
    );
};

export default MainMenu;

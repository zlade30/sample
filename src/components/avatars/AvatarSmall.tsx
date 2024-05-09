import Avatar from '@assets/avatars/1.png';

const AvatarSmall = () => {
    return (
        <div className="rounded-full bg-primary-900 relative">
            <img
                src={Avatar}
                alt="profile"
                className="object-contain size-[40px] rounded-full"
            />
            <div className="size-[12px] bg-success-main rounded-full absolute bottom-0 right-0 border-[2px] border-white" />
        </div>
    );
};

export default AvatarSmall;

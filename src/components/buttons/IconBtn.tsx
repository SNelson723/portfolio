interface IconBtnProps {
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  onClick?: () => void;
  colorClass: string;
  hoverTheme: string;
}

const IconBtn = ({ Icon, onClick, colorClass, hoverTheme }: IconBtnProps) => {
  return (
    <button
      className={`btn-icon hover:bg-${hoverTheme} rounded-md`}
      onMouseDown={(e) => {
        e.currentTarget.style.boxShadow = `inset 0 0 0 1px var(--color-${colorClass})`;
      }}
      onMouseUp={(e) => {
        e.currentTarget.style.boxShadow = `none`;
      }}
      onClick={onClick}
    >
      <Icon className="w-6 h-6" stroke={`stroke-${colorClass}`} />
    </button>
  );
};

export default IconBtn;

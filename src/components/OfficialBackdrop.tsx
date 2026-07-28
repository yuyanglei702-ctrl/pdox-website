type OfficialBackdropProps = {
  kind: 'atelier' | 'archive' | 'material';
  priority?: boolean;
  className?: string;
};

const sourceByKind = {
  atelier: 'hero-obsidian-atelier',
  archive: 'platinum-laboratory-archive',
  material: 'bioenzyme-material-field',
};

export default function OfficialBackdrop({ kind, priority = false, className = '' }: OfficialBackdropProps) {
  const source = sourceByKind[kind];

  return (
    <picture className={`absolute inset-0 ${className}`} aria-hidden="true">
      <source media="(max-width: 767px)" srcSet={`/images/official/${source}-mobile.avif`} type="image/avif" />
      <source media="(max-width: 767px)" srcSet={`/images/official/${source}-mobile.webp`} type="image/webp" />
      <source srcSet={`/images/official/${source}-desktop.avif`} type="image/avif" />
      <img
        src={`/images/official/${source}-desktop.webp`}
        alt=""
        decoding="async"
        fetchPriority={priority ? 'high' : 'auto'}
        loading={priority ? 'eager' : 'lazy'}
        className="h-full w-full object-cover"
      />
    </picture>
  );
}

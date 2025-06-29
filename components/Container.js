export function Container({ children, width, height }) {
  return (
    <div width={width} height={height} style={{
        backgroundColor: 'grey',
        width: width,
        height: height,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '5px'
    }}>
      {children}
    </div>
  );
}

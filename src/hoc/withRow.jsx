export default function withRow(Component) {
  // eslint-disable-next-line react/prop-types
  const EnhancedComponent = ({ row }) => <Component {...row} />;

  return EnhancedComponent;
}

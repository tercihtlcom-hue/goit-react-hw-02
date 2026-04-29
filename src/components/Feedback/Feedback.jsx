const Feedback = ({ data, total, positive }) => {
  return (
    <ul style={{ listStyle: 'none', padding: 0, marginTop: '20px' }}>
      <li>Good: {data.good}</li>
      <li>Neutral: {data.neutral}</li>
      <li>Bad: {data.bad}</li>
      <li style={{ fontWeight: 'bold' }}>Total: {total}</li>
      <li style={{ color: 'green' }}>Positive: {positive}%</li>
    </ul>
  );
};
export default Feedback;
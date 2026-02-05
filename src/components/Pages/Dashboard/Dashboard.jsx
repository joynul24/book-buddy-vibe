import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const data = [
  { name: "The Great Gatsby", rating: 4.5 },
  { name: "To Kill a Mockingbird", rating: 4.8 },
  { name: "1984", rating: 4.6 },
  { name: "The Catcher in the Rye", rating: 4.3 },
  { name: "Pride and Prejudice", rating: 4.7 },
  { name: "The Hobbit", rating: 4.9 },
  { name: "Harry Potter", rating: 4.8 },
  { name: "The Alchemist", rating: 4.6 },
  { name: "The Girl on the Train", rating: 4.2 },
];

export default function Dashboard() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-center mb-6">📊 Book Ratings Column Chart</h2>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
          <XAxis dataKey="name" tick={{ fontSize: 12 }} />
          <YAxis domain={[0, 5]} />
          <Tooltip />
          <Legend />
          {/* সুন্দর রঙের গ্রেডিয়েন্ট বার */}
          <Bar dataKey="rating" fill="url(#colorGradient)" />
          <defs>
            <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#50B1C9" stopOpacity={0.9} />
              <stop offset="100%" stopColor="#23BE0A" stopOpacity={0.9} />
            </linearGradient>
          </defs>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

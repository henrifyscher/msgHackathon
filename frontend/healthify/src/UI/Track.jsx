import React, { useRef } from 'react';
import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas';
import {
  LineChart,
  PolarAngleAxis,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  RadialBarChart,
  RadialBar
} from 'recharts';
import "../styles/track.css";

const mockData = {
  trainingTime: [
    { date: '2024-06-01', time: 30 },
    { date: '2024-06-02', time: 45 },
    { date: '2024-06-03', time: 60 },
    { date: '2024-06-04', time: 50 },
    { date: '2024-06-05', time: 20 },
    { date: '2024-06-06', time: 90 },
    { date: '2024-06-07', time: 10 },
    { date: '2024-06-08', time: 60 },
    { date: '2024-06-09', time: 35 },
    { date: '2024-06-10', time: 75 },
    { date: '2024-06-11', time: 50 },
    { date: '2024-06-12', time: 65 },
    { date: '2024-06-13', time: 85 },
    { date: '2024-06-14', time: 45 },
    { date: '2024-06-15', time: 40 },
    { date: '2024-06-16', time: 60 },
    { date: '2024-06-17', time: 30 },
    { date: '2024-06-18', time: 55 },
    { date: '2024-06-19', time: 70 },
    { date: '2024-06-20', time: 60 },
    { date: '2024-06-21', time: 30 },
    { date: '2024-06-22', time: 55 },
    { date: '2024-06-23', time: 70 },
    { date: '2024-06-24', time: 50 }
  ],
  calories: [
    { date: '2024-06-01', calories: 200 },
    { date: '2024-06-02', calories: 300 },
    { date: '2024-06-03', calories: 250 },
    { date: '2024-06-04', calories: 270 },
    { date: '2024-06-05', calories: 220 },
    { date: '2024-06-06', calories: 350 },
    { date: '2024-06-07', calories: 180 },
    { date: '2024-06-08', calories: 290 },
    { date: '2024-06-09', calories: 310 },
    { date: '2024-06-10', calories: 230 },
    { date: '2024-06-11', calories: 280 },
    { date: '2024-06-12', calories: 260 },
    { date: '2024-06-13', calories: 300 },
    { date: '2024-06-14', calories: 250 },
    { date: '2024-06-15', calories: 270 },
    { date: '2024-06-16', calories: 220 },
    { date: '2024-06-17', calories: 320 },
    { date: '2024-06-18', calories: 280 },
    { date: '2024-06-19', calories: 290 },
    { date: '2024-06-20', calories: 220 },
    { date: '2024-06-21', calories: 320 },
    { date: '2024-06-22', calories: 100 },
    { date: '2024-06-23', calories: 290 },
    { date: '2024-06-24', calories: 260 }
  ],
  heartRate: [
    { date: '2024-06-01', heartRate: 75 },
    { date: '2024-06-02', heartRate: 80 },
    { date: '2024-06-03', heartRate: 85 },
    { date: '2024-06-04', heartRate: 78 },
    { date: '2024-06-05', heartRate: 82 },
    { date: '2024-06-06', heartRate: 90 },
    { date: '2024-06-07', heartRate: 76 },
    { date: '2024-06-08', heartRate: 88 },
    { date: '2024-06-09', heartRate: 84 },
    { date: '2024-06-10', heartRate: 81 },
    { date: '2024-06-11', heartRate: 79 },
    { date: '2024-06-12', heartRate: 85 },
    { date: '2024-06-13', heartRate: 80 },
    { date: '2024-06-14', heartRate: 87 },
    { date: '2024-06-15', heartRate: 83 },
    { date: '2024-06-16', heartRate: 77 },
    { date: '2024-06-17', heartRate: 90 },
    { date: '2024-06-18', heartRate: 86 },
    { date: '2024-06-19', heartRate: 81 },
    { date: '2024-06-20', heartRate: 77 },
    { date: '2024-06-21', heartRate: 30 },
    { date: '2024-06-22', heartRate: 86 },
    { date: '2024-06-23', heartRate: 81 },
    { date: '2024-06-24', heartRate: 85 }
  ],
  sleep: [
    { date: '2024-06-01', hours: 7 },
    { date: '2024-06-02', hours: 8 },
    { date: '2024-06-03', hours: 6 },
    { date: '2024-06-04', hours: 7.5 },
    { date: '2024-06-05', hours: 8 },
    { date: '2024-06-06', hours: 6.5 },
    { date: '2024-06-07', hours: 7 },
    { date: '2024-06-08', hours: 7.8 },
    { date: '2024-06-09', hours: 8.2 },
    { date: '2024-06-10', hours: 7.3 },
    { date: '2024-06-11', hours: 2 },
    { date: '2024-06-12', hours: 7.1 },
    { date: '2024-06-13', hours: 7.5 },
    { date: '2024-06-14', hours: 7 },
    { date: '2024-06-15', hours: 8 },
    { date: '2024-06-16', hours: 6.8 },
    { date: '2024-06-17', hours: 7.4 },
    { date: '2024-06-18', hours: 3 },
    { date: '2024-06-19', hours: 7.2 },
    { date: '2024-06-20', hours: 6.8 },
    { date: '2024-06-21', hours: 7.4 },
    { date: '2024-06-22', hours: 8 },
    { date: '2024-06-23', hours: 7.2 },
    { date: '2024-06-24', hours: 7.8 }
  ]
};

const calculateAverage = (data, key) => {
  const total = data.reduce((acc, curr) => acc + curr[key], 0);
  return (total / data.length).toFixed(2);
};

const TrackYourFitness = () => {
  const avgTrainingTime = calculateAverage(mockData.trainingTime, 'time');
  const avgCalories = calculateAverage(mockData.calories, 'calories');
  const avgHeartRate = calculateAverage(mockData.heartRate, 'heartRate');
  const avgSleep = calculateAverage(mockData.sleep, 'hours');

  const data = [
    { name: 'Training Time (min)', value: avgTrainingTime },
    { name: 'Calories Burned', value: avgCalories },
    { name: 'Heart Rate (bpm)', value: avgHeartRate },
    { name: 'Sleep (hrs)', value: avgSleep }
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  const getHealthFeedback = () => {
    let feedback = "Based on your recent activity, here are some insights: ";

    if (avgTrainingTime >= 45) {
      feedback += "Your training time is excellent. ";
    } else {
      feedback += "Try to increase your training time. ";
    }

    if (avgCalories >= 250) {
      feedback += "You're burning a good amount of calories. ";
    } else {
      feedback += "Consider increasing your activity level to burn more calories. ";
    }

    if (avgHeartRate >= 60 && avgHeartRate <= 80) {
      feedback += "Your heart rate is within a healthy range. ";
    } else {
      feedback += "Keep an eye on your heart rate; it might be too high or too low. ";
    }

    if (avgSleep >= 7) {
      feedback += "You're getting enough sleep. ";
    } else {
      feedback += "Try to get more sleep for better health. ";
    }

    return feedback;
  };

  const feedbackRef = useRef();
  const chartsRef = useRef();
  const generatePDF = () => {
    const doc = new jsPDF();

    html2canvas(feedbackRef.current).then((canvas) => {
      const feedbackImg = canvas.toDataURL('image/png');
      doc.text("Health Record", 20, 20);
      doc.addImage(feedbackImg, 'PNG', 15, 30, 180, 60);
      
      
      html2canvas(chartsRef.current).then((canvas) => {
        const chartsImg = canvas.toDataURL('image/png');
        doc.addPage();
        doc.addImage(chartsImg, 'PNG', 15, 20, 180, 160);
        doc.save("health_record.pdf");
      });
    });
  };

  return (
    <div className="track-your-fitness">
      <h1>Track Your Fitness</h1>

      <div className="charts-container" ref={chartsRef}>
        <div className="chart">
          <h6>Training Time</h6>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={mockData.trainingTime}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="time" stroke="#8884d8" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="chart">
          <h6>Calories Burned</h6>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={mockData.calories}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="calories" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="chart">
          <h6>Heart Rate</h6>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={mockData.heartRate}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="heartRate" stroke="#ff7300" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="chart">
          <h6>Sleep hours</h6>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={mockData.sleep}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="hours" stroke="#8884d8" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="statistics-container">
        <h2>Health Statistics</h2>
        <div className="statistics-content">
          <div className="statistics-info" ref={feedbackRef}>
            <h3>Health Feedback</h3>
            <p>{getHealthFeedback()}</p>
          </div>
          <div className="radial-bar-chart">
            <ResponsiveContainer width="100%" height={400}>
            <RadialBarChart
                cx="50%"
                cy="50%"
                innerRadius="10%"
                outerRadius="80%"
                barSize={10}
                data={data}
              >
               <PolarAngleAxis type="number" domain={[0, 100]} />
                <RadialBar
                  minAngle={15}
                  label={{ position: 'insideStart', fill: '#fff' }}
                  background
                  clockWise
                  dataKey="value"
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </RadialBar>
                <Legend
                  iconSize={10}
                  width={120}
                  height={140}
                  layout="vertical"
                  verticalAlign="middle"
                  align="right"
                />
                <Tooltip />
              </RadialBarChart>
            </ResponsiveContainer>
          </div>
        </div>
        <button
          className="download-button"
          onClick={generatePDF}
          title="Download your health record"
        >
          Download
        </button>
      </div>
    </div>
  );
};

export default TrackYourFitness;

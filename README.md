# AI-Powered Network Intrusion Detection System (NIDS)

![NIDS Banner](https://img.shields.io/badge/Status-Active-brightgreen) ![React](https://img.shields.io/badge/Frontend-React%20%7C%20Vite-blue) ![TailwindCSS](https://img.shields.io/badge/Styling-Tailwind%20CSS-38B2AC) ![Python](https://img.shields.io/badge/ML%20Backend-Python-FFE873)

A futuristic, AI-powered Network Intrusion Detection System featuring a premium Security Operations Center (SOC) dashboard. The system combines a high-performance machine learning backend (trained via Google Colab) with a sleek, dark-themed React frontend to monitor, analyze, and detect network threats in real-time.

## 🌟 Key Features

*   **Intrusion Detection Interface**: Run manual or batch predictions using trained ML models on network traffic features.
*   **Live Monitoring**: Real-time traffic visualization and active session monitoring using responsive interactive charts.
*   **Attack Analytics**: Deep-dive analytics into threat distribution, historical trends, and protocol vulnerability.
*   **ML Performance Dashboard**: Visualizes model metrics including Accuracy, Precision, Recall, F1-Score, ROC Curves, and Feature Importance.
*   **Premium Cybersecurity UI**: Fully responsive dark theme with neon accents, glassmorphism UI cards, and smooth Framer Motion animations.
*   **System Event Logs**: Terminal-style output for raw system events and ML predictions.

## 🛠️ Technology Stack

**Frontend**
*   **React 18** (via Vite)
*   **Tailwind CSS v4** (Dark mode, custom neon glowing utilities)
*   **Framer Motion** (Micro-animations and layout transitions)
*   **Recharts** (Interactive data visualization)
*   **Lucide React** (Modern iconography)

**Backend / Machine Learning**
*   **Python** (Jupyter Notebook `4thSemEL.ipynb`)
*   **Scikit-Learn / TensorFlow** (Model Training)
*   **Flask / FastAPI** (API integration ready)

## 📂 Project Structure

```text
Network_Intrusion/
│
├── frontend/               # React + Vite Frontend Application
│   ├── src/
│   │   ├── components/     # Reusable UI components (Sidebar, TopNav)
│   │   ├── pages/          # Core views (Dashboard, Analytics, Detection, etc.)
│   │   ├── App.jsx         # Main router layout
│   │   ├── index.css       # Global Tailwind and custom theme styles
│   │   └── main.jsx        # React DOM entry point
│   ├── package.json        # Frontend dependencies
│   └── vite.config.js      # Vite build configuration
│
├── 4thSemEL.ipynb          # Original Google Colab ML Training Notebook
└── README.md               # Project documentation
```

## 🚀 Getting Started

### 1. Running the Frontend Dashboard

Ensure you have [Node.js](https://nodejs.org/) installed on your machine.

```bash
# Navigate to the frontend directory
cd frontend

# Install all dependencies
npm install

# Start the Vite development server
npm run dev
```
The UI will be accessible at `http://localhost:5173`.

### 2. Integrating the Machine Learning Backend

Currently, the frontend uses a simulated environment to showcase UI capabilities. To connect it to your actual machine learning models from `4thSemEL.ipynb`:

**Option A: Expose via Colab (FastAPI / Flask + Ngrok)**
1. In your Colab notebook, set up a simple API endpoint (e.g., using Flask or FastAPI) that accepts `POST` requests with network features.
2. Use `ngrok` or `localtunnel` within Colab to generate a public URL.
3. Open the NIDS Dashboard, navigate to **Settings**, and paste the generated URL into the "Backend API Integration" field.

**Option B: Run Locally**
1. Export your trained models from the Colab notebook as `.pkl` or `.joblib` files.
2. Create a local `app.py` in the root directory using FastAPI or Flask.
3. Serve the models locally at `http://localhost:8000` and configure the UI Settings to point to this local endpoint.

## 🛡️ ML Model Features Expected

The frontend prediction module is pre-configured to accept the following network features corresponding to your dataset:
`duration`, `protocol_type`, `service`, `flag`, `src_bytes`, `dst_bytes`, `land`, `wrong_fragment`, `urgent`, `hot`, `num_failed_logins`, and `logged_in`.

---
*Designed for comprehensive network security intelligence.*
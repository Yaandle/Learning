'use client'

import React, { useState } from 'react';
import { Card, CardHeader, CardContent, CardTitle } from './components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './components/ui/tabs';

interface TopicItem {
  subtitle: string;
  text: string;
}

interface TopicData {
  title: string;
  content: TopicItem[];
}

interface TopicsData {
  [key: string]: TopicData;
}

const topicsData: TopicsData = {
  slam: {
    title: "Simultaneous Localization and Mapping (SLAM)",
    content: [
      {
        subtitle: "ORB-SLAM",
        text: "ORB-SLAM is a versatile and accurate SLAM system that uses Oriented FAST and Rotated BRIEF (ORB) features for real-time camera tracking and mapping. Key aspects include:\n\n1. Feature Extraction: Uses ORB features, which are fast to compute and invariant to rotation and scale.\n2. Tracking: Matches current frame features with the local map to estimate camera pose.\n3. Local Mapping: Creates new map points and performs local bundle adjustment to optimize the map.\n4. Loop Closing: Detects and corrects large loops in the trajectory.\n5. Applications: Widely used in AR/VR, robotics, and autonomous navigation.\n\nORB-SLAM excels in various environments and scales efficiently for large maps, making it a popular choice for real-time applications."
      },
      {
        subtitle: "RTAB-Map",
        text: "RTAB-Map (Real-Time Appearance-Based Mapping) is a RGB-D Graph SLAM approach based on a global Bayesian loop closure detector. Key features include:\n\n1. Multi-Session Mapping: Supports incremental mapping over multiple sessions.\n2. Loop Closure: Uses a bag-of-words approach for efficient loop detection.\n3. Graph Optimization: Employs graph optimization to refine the map and trajectory.\n4. Multi-Modal Input: Can use various sensor inputs including stereo, RGB-D, and LiDAR.\n5. Memory Management: Implements a memory management system for large-scale mapping.\n\nRTAB-Map is particularly useful for large-scale and long-term SLAM in real-world environments, offering robust performance in dynamic scenes."
      },
      {
        subtitle: "Visual SLAM",
        text: "Visual SLAM uses visual features from camera images to construct a map of the environment and estimate the camera's position. Key components and techniques include:\n\n1. Feature Detection and Matching: Extracts and matches visual features across frames.\n2. Motion Estimation: Estimates camera motion between frames using epipolar geometry.\n3. Mapping: Triangulates 3D points to build a sparse or dense map of the environment.\n4. Bundle Adjustment: Optimizes camera poses and 3D point positions globally.\n5. Loop Closure: Detects revisited areas to correct drift and improve map consistency.\n\nVisual SLAM is crucial in AR/VR applications, autonomous navigation in GPS-denied environments, and robotics. It faces challenges in dynamic environments and scenes with low texture."
      },
      {
        subtitle: "LiDAR-based SLAM",
        text: "LiDAR SLAM uses laser range finders to create precise 3D maps of the environment. Key aspects include:\n\n1. Point Cloud Processing: Filters and segments raw LiDAR data into usable point clouds.\n2. Scan Matching: Aligns consecutive LiDAR scans to estimate relative motion.\n3. Loop Detection: Identifies revisited areas using geometric or appearance-based methods.\n4. Graph Optimization: Refines the overall map and trajectory.\n5. 3D Mapping: Constructs detailed 3D models of the environment.\n\nLiDAR SLAM is highly accurate and works well in both indoor and outdoor settings, making it popular in autonomous vehicles and robotics. It excels in environments where visual features might be lacking but can be computationally intensive."
      }
    ]
  },
  vision: {
    title: "3D Vision and Pose Estimation",
    content: [
      {
        subtitle: "3D Vision Techniques",
        text: "3D vision involves extracting three-dimensional information from 2D images or video sequences. Key techniques include:\n\n1. Stereo Vision: Uses two cameras to estimate depth through triangulation.\n   - Requires camera calibration and feature matching.\n   - Challenges include occlusions and uniform textures.\n\n2. Structure from Motion (SfM): Reconstructs 3D scenes from multiple viewpoints.\n   - Involves feature tracking, motion estimation, and 3D point triangulation.\n   - Used in photogrammetry and 3D modeling from images.\n\n3. Depth from Defocus: Estimates depth based on the blur of out-of-focus objects.\n   - Requires knowledge of camera parameters and multiple images with different focus settings.\n   - Can work with a single camera but may require specialized hardware.\n\n4. Time-of-Flight (ToF) Cameras: Measure depth using the time taken for light to bounce back from objects.\n   - Provides real-time depth maps but can be affected by ambient light.\n\n5. Structured Light: Projects known patterns onto a scene and analyzes their deformation.\n   - Used in 3D scanners and some consumer depth cameras.\n   - Can achieve high accuracy but may struggle in outdoor environments.\n\nThese techniques are fundamental in robotics, augmented reality, autonomous vehicles, and computer vision applications."
      },
      {
        subtitle: "Pose Estimation with EKF",
        text: "Extended Kalman Filter (EKF) is used for pose estimation by fusing data from various sensors. Key aspects include:\n\n1. State Representation: Typically includes position, orientation, and their derivatives.\n2. Prediction Step: Uses a motion model to predict the next state.\n3. Update Step: Incorporates sensor measurements to correct the prediction.\n4. Linearization: EKF linearizes non-linear models around the current estimate.\n5. Covariance Matrix: Maintains uncertainty estimates of the state.\n\nEKF Pose Estimation Process:\n1. Initialize state and covariance.\n2. Predict next state using motion model.\n3. Compute Jacobians for linearization.\n4. Predict measurement and innovation covariance.\n5. Compute Kalman gain.\n6. Update state estimate and covariance.\n7. Repeat from step 2 for each new measurement.\n\nAdvantages of EKF:\n- Handles uncertainty in both process and measurements.\n- Computationally efficient for real-time applications.\n- Can fuse data from multiple sensor types.\n\nChallenges:\n- Assumes Gaussian noise and may fail with highly non-linear systems.\n- Requires careful tuning of noise parameters.\n- Can diverge if initial estimates are poor.\n\nEKF is widely used in robotics for localization, particularly in systems with multiple sensors like IMUs, GPS, and visual odometry."
      }
    ]
  },
  reinforcement: {
    title: "Deep Reinforcement Learning (DRL)",
    content: [
      {
        subtitle: "Q-Learning and DQNs",
        text: "Q-Learning is a model-free reinforcement learning algorithm that learns to make decisions by estimating the value of taking actions in states.\n\nKey Concepts:\n1. Q-Value: Represents the expected cumulative reward of taking an action in a state.\n2. Bellman Equation: Used to update Q-values based on rewards and future estimates.\n3. Exploration vs. Exploitation: Balances learning new information and using known information.\n\nDeep Q-Networks (DQNs) extend Q-Learning by using deep neural networks to approximate the Q-function:\n\n1. Neural Network Architecture: Typically uses convolutional layers for image inputs, followed by fully connected layers.\n2. Experience Replay: Stores and randomly samples past experiences to break correlations between consecutive samples.\n3. Target Network: Uses a separate network for generating targets to stabilize learning.\n4. Double DQN: Addresses overestimation bias by decoupling action selection and evaluation.\n5. Dueling DQN: Separates state value and action advantage estimation for better performance.\n\nApplications:\n- Game playing (e.g., Atari games)\n- Robotics control\n- Resource management\n\nChallenges:\n- Stability issues in training\n- Difficulty in handling continuous action spaces\n- Sample inefficiency in complex environments"
      },
      {
        subtitle: "Policy Gradient Methods",
        text: "Policy gradient methods directly optimize the policy without using a value function. They're particularly useful in continuous action spaces and can learn stochastic policies.\n\nKey Concepts:\n1. Policy Parameterization: Represents the policy as a parameterized function (often a neural network).\n2. Objective Function: Typically the expected cumulative reward.\n3. Gradient Ascent: Updates policy parameters to maximize the objective.\n\nCommon Algorithms:\n1. REINFORCE:\n   - Simple Monte Carlo policy gradient method.\n   - High variance in gradient estimates.\n\n2. Actor-Critic Methods:\n   - Combine policy gradient (Actor) with value function estimation (Critic).\n   - Reduce variance in gradient estimates.\n\n3. Proximal Policy Optimization (PPO):\n   - Uses a clipped surrogate objective to limit policy updates.\n   - Balances sample efficiency and ease of implementation.\n\n4. Trust Region Policy Optimization (TRPO):\n   - Ensures policy updates stay within a trust region for stability.\n   - More complex implementation than PPO.\n\nAdvantages:\n- Can handle continuous action spaces.\n- Can learn stochastic policies.\n- Often more stable than value-based methods in some domains.\n\nChallenges:\n- Can be sample inefficient.\n- Sensitive to hyperparameter choices.\n- May converge to local optima."
      },
      {
        subtitle: "Advanced DRL Techniques",
        text: "Advanced DRL techniques aim to improve stability, sample efficiency, and performance in complex environments:\n\n1. Soft Actor-Critic (SAC):\n   - Off-policy algorithm that maximizes expected reward and entropy.\n   - Improves exploration and robustness.\n   - Effective in continuous action spaces.\n\n2. Twin Delayed Deep Deterministic Policy Gradient (TD3):\n   - Addresses overestimation bias in actor-critic methods.\n   - Uses two Q-networks and delayed policy updates.\n   - Suitable for continuous control tasks.\n\n3. Distributed RL:\n   - Apex DQN, Ape-X: Distribute data collection and learning across multiple workers.\n   - Improve sample efficiency and learning speed.\n\n4. Model-Based RL:\n   - World Models: Learn a model of the environment to improve planning.\n   - Dyna-Q: Integrates learning and planning using a learned model.\n\n5. Meta-Learning in RL:\n   - MAML (Model-Agnostic Meta-Learning): Learns to quickly adapt to new tasks.\n   - Improves sample efficiency in multi-task settings.\n\n6. Hierarchical RL:\n   - Options Framework: Learns temporal abstractions for complex tasks.\n   - Feudal Networks: Use a hierarchy of agents for different levels of abstraction.\n\n7. Multi-Agent RL:\n   - QMIX, MADDPG: Algorithms designed for cooperative or competitive multi-agent settings.\n\n8. Inverse RL:\n   - Learns reward functions from expert demonstrations.\n   - Useful in scenarios where defining rewards is challenging.\n\nThese advanced techniques address various challenges in DRL, such as sample efficiency, stability, and scalability to complex, real-world problems. They form the basis of cutting-edge research and applications in robotics, game AI, and autonomous systems."
      }
    ]
  }
};

export default function RoboticsAILearning() {
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});

  const toggleSection = (category: string, index: number) => {
    setExpandedSections(prev => ({
      ...prev,
      [`${category}-${index}`]: !prev[`${category}-${index}`]
    }));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-6">Robotics and AI Learning Hub</h1>
      <Tabs defaultValue="slam">
        <TabsList>
          <TabsTrigger value="slam">SLAM</TabsTrigger>
          <TabsTrigger value="vision">3D Vision</TabsTrigger>
          <TabsTrigger value="reinforcement">Reinforcement Learning</TabsTrigger>
        </TabsList>
        {Object.entries(topicsData).map(([key, { title, content }]) => (
          <TabsContent key={key} value={key}>
            <Card>
              <CardHeader>
                <CardTitle>{title}</CardTitle>
              </CardHeader>
              <CardContent>
                {content.map((item, index) => (
                  <div key={index} className="mb-4">
                    <h3 
                      className="text-xl font-semibold mb-2 cursor-pointer hover:text-blue-600"
                      onClick={() => toggleSection(key, index)}
                    >
                      {item.subtitle}
                    </h3>
                    {expandedSections[`${key}-${index}`] && (
                      <p className="mt-2 text-gray-700 whitespace-pre-line">{item.text}</p>
                    )}
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
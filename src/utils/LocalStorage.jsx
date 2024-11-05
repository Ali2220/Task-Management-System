const employees = [
  {
    id: 1,
    firstName: 'Ali',
    email: 'ali@example.com',
    password: '123',
    taskNumbers: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
    tasks: [
      {
        taskTitle: 'Design Homepage',
        taskDescription: 'Create the homepage UI for the new project.',
        taskDate: '2024-10-20',
        category: 'Design',
        active: true,
        newTask: true,
        completed: true,
        failed: true,
      },
      {
        taskTitle: 'Fix Bugs',
        taskDescription: 'Resolve bugs reported in the login module.',
        taskDate: '2024-10-21',
        category: 'Development',
        active: true,
        newTask: false,
        completed: true,
        failed: true,
      },
      {
        taskTitle: 'Update Documentation',
        taskDescription: 'Update the API documentation for the new features.',
        taskDate: '2024-10-18',
        category: 'Documentation',
        active: false,
        newTask: true,
        completed: true,
        failed: true,
      },
    ],
  },
  {
    id: 2,
    firstName: 'Ahmed',
    email: 'ahmed@example.com',
    password: '123',
    taskNumbers: {
      active: 2,
      newTask: 1,
      completed: 0,
      failed: 0,
    },
    tasks: [
      {
        taskTitle: 'Create Landing Page',
        taskDescription: 'Design and develop the landing page for marketing.',
        taskDate: '2024-10-19',
        category: 'Design',
        active: true,
        newTask: false,
        completed: true,
        failed: true,
      },
      {
        taskTitle: 'Integrate Payment Gateway',
        taskDescription: 'Implement payment gateway for e-commerce checkout.',
        taskDate: '2024-10-20',
        category: 'Development',
        active: true,
        newTask: true,
        completed: true,
        failed: true,
      },
    ],
  },
  {
    id: 3,
    firstName: 'Ayesha',
    email: 'ayesha@example.com',
    password: '123',
    taskNumbers: {
      active: 2,
      newTask: 1,
      completed: 0,
      failed: 0,
    },
    tasks: [
      {
        taskTitle: 'Fix Responsive Issues',
        taskDescription: 'Ensure the dashboard works well on mobile devices.',
        taskDate: '2024-10-22',
        category: 'Development',
        active: true,
        newTask: true,
        completed: true,
        failed: true,
      },
      {
        taskTitle: 'Prepare Release Notes',
        taskDescription: 'Prepare release notes for version 2.1.',
        taskDate: '2024-10-20',
        category: 'Documentation',
        active: true,
        newTask: false,
        completed: true,
        failed: true,
      },
    ],
  },
  {
    id: 4,
    firstName: 'Sara',
    email: 'sara@example.com',
    password: '123',
    taskNumbers: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
    tasks: [
      {
        taskTitle: 'Test New Features',
        taskDescription: 'Conduct QA testing for the new feature updates.',
        taskDate: '2024-10-21',
        category: 'Testing',
        active: true,
        newTask: false,
        completed: false,
        failed: true,
      },
      {
        taskTitle: 'Fix Database Issues',
        taskDescription: 'Fix the reported database connection errors.',
        taskDate: '2024-10-22',
        category: 'Development',
        active: false,
        newTask: true,
        completed: false,
        failed: true,
      },
    ],
  },
  {
    id: 5,
    firstName: 'Zain',
    email: 'zain@example.com',
    password: '123',
    taskNumbers: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
    tasks: [
      {
        taskTitle: 'Write Blog Post',
        taskDescription: "Write a blog post for the company's technical blog.",
        taskDate: '2024-10-18',
        category: 'Content',
        active: true,
        newTask: true,
        completed: false,
        failed: true,
      },
      {
        taskTitle: 'Update CSS Framework',
        taskDescription:
          'Upgrade the project to the latest Tailwind CSS version.',
        taskDate: '2024-10-17',
        category: 'Development',
        active: false,
        newTask: false,
        completed: true,
        failed: true,
      },
    ],
  },
];

const admin = [
  {
    id: 1,
    firstName: 'Admin',
    email: 'admin@example.com',
    password: '123',
  },
];

export const setLocalStorage = () => {
  localStorage.setItem('employees', JSON.stringify(employees));
  localStorage.setItem('admin', JSON.stringify(admin));
};

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem('employees'));
  const admin = JSON.parse(localStorage.getItem('admin'));

  return { employees, admin };
};

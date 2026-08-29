import { format, formatDistanceToNow } from 'date-fns';

export const formatCurrency = (amount) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(amount);
};

export const formatTime = (date) => {
  if (!date) return '';
  return format(new Date(date), 'hh:mm a');
};

export const formatDate = (date) => {
  if (!date) return '';
  return format(new Date(date), 'dd MMM, yyyy');
};

export const formatDistance = (meters) => {
  if (meters < 1000) return `${meters} m`;
  return `${(meters / 1000).toFixed(1)} km`;
};

export const getGreeting = () => {
  const hour = new Date().getHours();
  if (hour < 12) return 'Good Morning';
  if (hour < 17) return 'Good Afternoon';
  return 'Good Evening';
};

export const getTimeAgo = (date) => {
  if (!date) return '';
  return formatDistanceToNow(new Date(date), { addSuffix: true });
};

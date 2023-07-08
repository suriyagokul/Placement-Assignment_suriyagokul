function canAttendMeetings(intervals) {
  intervals.sort((a, b) => a[0] - b[0]);

  for (let i = 1; i < intervals.length; i++) {
    const prevEnd = intervals[i - 1][1];
    const currStart = intervals[i][0];

    if (currStart < prevEnd) {
      return false;
    }
  }

  return true;
}

// Example usage:
const intervals = [[0, 30], [5, 10], [15, 20]];
const result = canAttendMeetings(intervals);
console.log(result); // Output: false (There are overlapping time intervals)

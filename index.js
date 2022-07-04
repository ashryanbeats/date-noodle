import { previousFriday, parseISO, set } from "date-fns";

const cmdLnArgOrPrevFri = process.argv[2]
  ? parseISO(process.argv[2])
  : set(previousFriday(new Date()), {hours: 0, minutes: 0, seconds: 0, milliseconds: 0});

console.log(cmdLnArgOrPrevFri);

export interface MenteeProps {
  onMenteeSelected?: any;
  id: string;
  time: string;
  imgSrc: string;
  name: string;
  description: string;
  messageHighlight: string;
  isSelected?: boolean | undefined;
}

export interface MenteeContainerProps {
  mentees: MenteeProps[];
  selectedId: string;
  onMenteeSelected?: any;
}

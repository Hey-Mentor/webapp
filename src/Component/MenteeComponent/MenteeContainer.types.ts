export interface MenteeProps {
  id: string;
  time: string;
  imgSrc: string;
  name: string;
  description: string;
  messageHighlight: string;
  isSelected: boolean;
}

export interface MenteeContainerProps {
  mentees: MenteeProps[];
  selectedId: string;
}

import {create} from 'zustand';



interface MacbookStore {
  color: string;
  scale: number;
  setColor: (color: string) => void;
  setScale: (scale: number) => void;
}

const useMacbookStore = create<MacbookStore>((set) => ({
    color:'#2e2c2e',
    setColor: (color:string) => set(() => ({color})),
    scale:0.08,
    setScale: (scale:number) => set(() => ({scale})),

    reset: () => set(() => ({color:'#2e2c2e', scale:0.08})),
}));

export default useMacbookStore; 
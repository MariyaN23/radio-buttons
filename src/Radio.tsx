import {
  ChangeEvent,
  ComponentPropsWithoutRef,
  createContext,
  ReactNode,
  useContext,
} from 'react';

type RadioProps = {
  children: ReactNode;
} & ComponentPropsWithoutRef<'input'>;

type RadioGroupProps = {
  checkedIcon?: ReactNode;
  children: ReactNode;
  icon?: ReactNode;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  value: string;
};

type RadioContextType = {
  checkedIcon?: ReactNode;
  icon?: ReactNode;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  value: string;
};

const RadioContext = createContext<RadioContextType | null>(null);

export const Radio = ({ children, ...props }: RadioProps) => {
  const context = useContext(RadioContext);
  if (!context) {
    throw new Error(
      'RadioContext has to be used within <RadioContext.Provider>',
    );
  }
  const { checkedIcon, icon, onChange, value } = context;
  return (
    <label
      className={'flex w-full cursor-pointer gap-4 border border-dotted p-2'}
    >
      {value === props.value ? checkedIcon : icon}
      <input
        checked={value === props.value}
        className={'hidden'}
        onChange={onChange}
        type={'radio'}
        {...props}
      />
      {children}
    </label>
  );
};

export const RadioGroup = ({
  checkedIcon,
  children,
  icon,
  onChange,
  value,
}: RadioGroupProps) => {
  return (
    <RadioContext.Provider value={{ checkedIcon, icon, onChange, value }}>
      {children}
    </RadioContext.Provider>
  );
};

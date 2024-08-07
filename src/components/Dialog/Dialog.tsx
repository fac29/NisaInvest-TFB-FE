import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
  } from "@/components/ui/alert-dialog"
  
  interface DialogProps {
    open: boolean;
    //onOpenChange lets parent know when dialog is closed
    onOpenChange: (open: boolean) => void;
    title: string;
    text: string;
  }
  
  export function Dialog({ open, onOpenChange, title, text }: DialogProps): JSX.Element {
    return (
      <AlertDialog open={open} onOpenChange={onOpenChange}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>{title}</AlertDialogTitle>
            <AlertDialogDescription>
              {text}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
           {/* when user clicks on the button, the value of onOpenChange changes to false */}
           
            <AlertDialogAction onClick={() => onOpenChange(false)}>
              Continue
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    )
  }
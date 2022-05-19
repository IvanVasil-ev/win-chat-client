export function redirectTo(url: string, isReplace: boolean = false, delay: number = 0) {
  const redirect = () => {
    if (isReplace) {
      document.location.replace(url);
      return;
    }
    document.location.href = url;
  };

  setTimeout(() => {
    redirect();
  }, delay);
}

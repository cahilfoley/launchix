interface Launchable {
  label: string
  command: string
  args: string[]
  created: Date
}

interface StoreLaunchable extends Launchable {
  id: number
}

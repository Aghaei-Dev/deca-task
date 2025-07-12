import { useMemo } from 'react'
import * as IconsData from './index'
import styles from './Icons.module.scss'
import Toaster, { toast } from '../Toaster'

/** @type { import('@storybook/react').Meta } */
export default {}

/** @type {import('@storybook/react').StoryObj} */
export const Default = {
  render: ({ search, ...args }) => {
    const copyName = (Icon) => {
      navigator.clipboard.writeText(Icon.name)
      toast.success('در کلیپ برد ذخیره شد.')
    }

    const FilteredIcons = useMemo(() => {
      let result = Object.values(IconsData)

      if (search) {
        result = result.filter((Icon) => Icon.name.toLowerCase().includes(search.toLowerCase()))
      }

      return result
    }, [search])

    return (
      <div className={styles.wrapper}>
        {FilteredIcons.map((Icon) => (
          <button
            key={Icon}
            type="button"
            onClick={() => copyName(Icon)}
            className={styles.iconButton}
          >
            <Icon {...args} />
            <div className={styles.iconName}>
              {Icon.name
                .replace('Icon', '')
                .replace(/([A-Z])/g, ' $1')
                .trim()}
            </div>
            <div className={styles.iconRawName}>{Icon.name}</div>
          </button>
        ))}
        <Toaster />
      </div>
    )
  },

  args: {
    size: 24,
    color: '#1E1E1F',
    search: '',
  },
}

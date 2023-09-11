import { Injectable } from '@nestjs/common'
import { join } from 'path'
import { mkdirSync, existsSync, writeFileSync, unlinkSync } from 'fs'
import { currenTime } from '../util'

@Injectable()
export class FileService {
  async upload(file: any) {
    const folderName = currenTime()
    const folderPath = join(__dirname, '../../public/uploads', folderName) // 拼接文件完整路径
    if (!existsSync(folderPath)) {
      mkdirSync(folderPath, 0o755)
    }
    const filename = `${Date.now()}-${file.originalname}`
    const targetFilePath = join(folderPath, filename)
    try {
      writeFileSync(targetFilePath, file.buffer)
      return {
        error: 0,
        msg: 'ok',
        src: `/public/uploads/${folderName}/${filename}`,
      }
    } catch (e) {
      return {
        error: e,
        msg: 'upload failed',
      }
    }
  }

  remove(fileName: string) {
    try {
      // 删除的路径
      const unPath = join(__dirname, `../../${fileName}`)
      unlinkSync(unPath)
      return {
        error: 0,
        msg: 'ok',
      }
    } catch (e) {
      return {
        error: e,
        msg: 'remove failed',
      }
    }
  }
}
